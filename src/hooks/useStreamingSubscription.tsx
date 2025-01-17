import type { ServerStreamingCall } from '@protobuf-ts/runtime-rpc';
import { useEffect, useRef, useState } from 'react';

interface UseStreamingSubscriptionOptions<TReq extends object, TRes extends object> {
  subscribeFn: (signal: AbortSignal) => ServerStreamingCall<TReq, TRes>;
  handleMessage: (message: TRes) => void;
  retryDelay?: number;
  alwaysRetry?: boolean;
}

export const useStreamingSubscription = () => {
  const subscribe = <TReq extends object, TRes extends object>({
    subscribeFn,
    handleMessage,
    retryDelay = 1000,
    alwaysRetry = true }: UseStreamingSubscriptionOptions<TReq, TRes>) => {

    const [isSubscribed, setIsSubscribed] = useState(false);
    const abortControllerRef = useRef<AbortController | null>(null);

    useEffect(() => {
      if (isSubscribed) return;
  
      const timeoutId = setTimeout(async () => {
        abortControllerRef.current = new AbortController();
        try {
          setIsSubscribed(true);
          const stream = subscribeFn(abortControllerRef.current.signal);

          console.log('Network subscription connecting...');
  
          for await (const message of stream.responses) {
            handleMessage(message);
          }
  
          setIsSubscribed(false);
          if (!alwaysRetry) {
            return;
          }
        } catch (err) {
          console.log('Network subscription disconnected...');
          if (abortControllerRef.current?.signal.aborted) {
            return;
          }
          setIsSubscribed(false);
        }
      }, retryDelay);
  
      return () => {
        clearTimeout(timeoutId);
      };
    }, [isSubscribed, retryDelay, subscribeFn, handleMessage, alwaysRetry]);
  
    useEffect(() => {
      return () => {
        abortControllerRef.current?.abort();
      };
    }, []);
  
    return { isSubscribed };
  };

  return { subscribe };
};