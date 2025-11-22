type SectionTitleProps ={
    text: string;
}


export function SectionTitle({text}: SectionTitleProps) {
  return (
    <div className="bg-amber-600 rounded-3xl py-2 px-6">
      <h2 className="text-white">{text}</h2>
    </div>
  );
}
