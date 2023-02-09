import { PropsWithChildren } from 'react';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';

interface ModalBaseProps extends PropsWithChildren {
  visible: boolean;
  onClose: () => void;
}

function BaseModal({ visible, onClose, children }: ModalBaseProps) {
  return (
    <SwipeableBottomSheet
      style={{ zIndex: 1000 }}
      bodyStyle={{
        background: 'rgba(0,0,0,0)',
      }}
      open={visible}
      onChange={onClose}
      fullScreen
      topShadow={false}>
      <div
        style={{
          zIndex: 100,
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
        }}
        className="Modal-Base-style">
        {children}
      </div>
    </SwipeableBottomSheet>
  );
}

export default BaseModal;
