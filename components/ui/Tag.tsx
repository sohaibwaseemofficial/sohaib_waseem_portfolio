interface TagProps {
  children: string;
  variant?: "default" | "copper" | "dim";
}

const variants = {
  default:
    "border border-[#26292C] text-[#9B9B93] bg-[#14171A]",
  copper:
    "border border-[#D68C45]/40 text-[#D68C45] bg-[#D68C45]/5",
  dim:
    "border border-[#26292C] text-[#9B9B93]/60 bg-transparent",
};

export function Tag({ children, variant = "default" }: TagProps) {
  return (
    <span
      className={`inline-block font-mono text-[11px] tracking-wider uppercase px-2.5 py-1 rounded-sm ${variants[variant]}`}
      style={{ fontFamily: "var(--font-jetbrains), monospace" }}
    >
      {children}
    </span>
  );
}

export function InProgressTag() {
  return (
    <span
      className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wider uppercase px-2.5 py-1 rounded-sm border border-[#D68C45]/40 text-[#D68C45] bg-[#D68C45]/5"
      style={{ fontFamily: "var(--font-jetbrains), monospace" }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#D68C45] animate-pulse" />
      In Progress
    </span>
  );
}
