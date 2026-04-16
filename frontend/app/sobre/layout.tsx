export default function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full min-h-screen bg-tavern">
      <div className="flex-1 w-full">{children}</div>
    </div>
  );
}
