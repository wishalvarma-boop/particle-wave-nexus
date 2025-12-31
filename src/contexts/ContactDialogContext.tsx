import React, { createContext, useContext, useState, ReactNode } from 'react';
import ContactDialog from '@/components/ContactDialog';

interface ContactDialogContextType {
  openDialog: () => void;
}

const ContactDialogContext = createContext<ContactDialogContextType | undefined>(undefined);

export const useContactDialog = () => {
  const context = useContext(ContactDialogContext);
  if (!context) {
    throw new Error('useContactDialog must be used within ContactDialogProvider');
  }
  return context;
};

export const ContactDialogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const openDialog = () => setOpen(true);

  return (
    <ContactDialogContext.Provider value={{ openDialog }}>
      {children}
      <ContactDialog open={open} onOpenChange={setOpen} />
    </ContactDialogContext.Provider>
  );
};
