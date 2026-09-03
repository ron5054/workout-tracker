import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import type { ComponentProps } from 'react'
import { cn } from '../../lib/utils'

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogClose = DialogPrimitive.Close
export const DialogPortal = DialogPrimitive.Portal

export const DialogOverlay = ({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Overlay>) => (
  <DialogPrimitive.Overlay
    className={cn('fixed inset-0 z-50 bg-black/70 backdrop-blur-sm', className)}
    {...props}
  />
)

export const DialogContent = ({
  className,
  children,
  ...props
}: ComponentProps<typeof DialogPrimitive.Content>) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      className={cn(
        'fixed z-50 overflow-y-auto border border-zinc-800 bg-zinc-950 text-zinc-50 shadow-2xl',
        'inset-x-0 bottom-0 w-full max-h-[min(92dvh,100%)] rounded-t-3xl rounded-b-none p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]',
        'sm:inset-auto sm:top-1/2 sm:left-1/2 sm:w-[min(100%-1.5rem,28rem)] sm:max-h-[min(85dvh,40rem)] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl sm:p-5',
        className,
      )}
      {...props}
    >
      <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-zinc-700 sm:hidden" />
      {children}
      <DialogPrimitive.Close className="absolute top-3 left-3 flex size-11 items-center justify-center rounded-xl text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100">
        <X className="size-5" />
        <span className="sr-only">סגירה</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
)

export const DialogHeader = ({ className, ...props }: ComponentProps<'div'>) => (
  <div className={cn('mb-4 space-y-1 pr-1 pl-12 text-right', className)} {...props} />
)

export const DialogTitle = ({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Title>) => (
  <DialogPrimitive.Title className={cn('text-lg font-bold', className)} {...props} />
)

export const DialogDescription = ({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Description>) => (
  <DialogPrimitive.Description
    className={cn('text-sm text-zinc-400', className)}
    {...props}
  />
)
