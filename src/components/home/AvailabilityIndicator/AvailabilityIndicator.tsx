type AvailabilityStatus =
  | "actively-looking"
  | "unavailable"
  | "open-to-opportunities"
  | "on-break";

interface AvailabilityIndicatorProps {
  status: AvailabilityStatus;
}

const statusConfig = {
  "actively-looking": {
    label: "Actively looking for work",
    color: "bg-[#1a955b]",
  },
  unavailable: {
    label: "Currently unavailable",
    color: "bg-[#e74938]",
  },
  "open-to-opportunities": {
    label: "Open to opportunities",
    color: "bg-[#e7c238]",
  },
  "on-break": {
    label: "On break",
    color: "bg-[#858585]",
  },
};

export function AvailabilityIndicator({ status }: AvailabilityIndicatorProps) {
  const config = statusConfig[status];

  return (
    <div className="inline-flex items-center gap-3 rounded-md border border-white/20 px-4 py-2">
      <span className="font-outfit text-sm font-bold uppercase tracking-widest text-tertiary-text">
        Availability:
      </span>
      <div className="flex items-center gap-2">
        <span
          className={`h-5 w-5 rounded-full ${config.color}`}
          aria-hidden="true"
        />
        <span className="font-outfit text-sm text-white">{config.label}</span>
      </div>
    </div>
  );
}
