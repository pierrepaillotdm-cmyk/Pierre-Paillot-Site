import type { ProjectStatus } from "@/lib/content";

const dotColor: Record<ProjectStatus, string> = {
  live: "bg-live",
  built: "bg-built",
  wip: "bg-wip",
};

export function StatusBadge({
  status,
  label,
}: {
  status: ProjectStatus;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap text-[13px] text-secondary">
      <span className={`h-[7px] w-[7px] rounded-full ${dotColor[status]}`} />
      {label}
    </span>
  );
}
