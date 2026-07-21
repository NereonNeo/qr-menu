export const SectionCard = ({ title, description, children }: { title: string; description: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-4 bg-white border border-gray-200 rounded-xl p-6">
    <div className="flex flex-col gap-1">
      <h3 className="text-s font-medium text-gray-900 font-gotham">{title}</h3>
      <p className="text-xs text-gray-500 font-gotham">{description}</p>
    </div>
    <div className="h-px bg-gray-200" />
    {children}
  </div>
);
