import React from 'react';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';

export interface SubscriptionStatusProps {
  tooltip: string;
  isSubscribed: boolean;
}

const SubscriptionStatus: React.FC<SubscriptionStatusProps> = ({ isSubscribed, tooltip }) => {
  return (
    <CircleTwoToneIcon
      titleAccess={tooltip}
      sx={{ ml: '0.5rem' }}
      color={(isSubscribed ? 'success' : 'warning')}
    />
  );
};

export default SubscriptionStatus;