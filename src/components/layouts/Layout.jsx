export default function Layout({ className, children }) {
  return (
    <div className={`container mx-auto px-4 ${className}`}>{children}</div>
  );
}
