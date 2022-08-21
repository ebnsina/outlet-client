export default function Layout({ className, children }) {
  return <div className={`container mx-auto ${className}`}>{children}</div>;
}
