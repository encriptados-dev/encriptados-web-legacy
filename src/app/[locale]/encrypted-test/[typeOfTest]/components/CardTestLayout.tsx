export default function CardTestLayout({
  children,
  currentStep = 1,
  totalSteps = 3,
}: {
  children: React.ReactNode;
  currentStep?: number;
  totalSteps?: number;
}) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-5xl  border   border-[#232323] rounded-3xl overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-6 p-6">
          <div className="space-y-8">
            <div className="min-h-[300px]">{children}</div>
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl" />
            <img
              src="/placeholder.svg?height=600&width=400"
              alt="Security illustration"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
