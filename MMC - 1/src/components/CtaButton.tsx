import Button from './Button'

interface CtaButtonProps {
  className?: string
  onClick?: () => void
}

export default function CtaButton({ className, onClick }: CtaButtonProps) {
  return (
    <Button to="/contact" variant="primary" onClick={onClick} className={className}>
      Start a Project
    </Button>
  )
}
