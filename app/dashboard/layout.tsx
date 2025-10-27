import { SidebarProvider } from "@/components/ui/sidebar";
import { getAllPlaygroundForUser } from "@/modules/dashboard/actions";
import { DashboardSidebar } from "@/modules/dashboard/components/dashboard-sidebar";


export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const playgrounds = await getAllPlaygroundForUser();

  const technologyIconMap: Record<string, string> = {
    REACT: "Zap",
    NEXTJS: "Lightbulb",
    EXPRESS: "Database",
    VUE: "Compass",
    HONO: "FlameIcon",
    ANGULAR: "Terminal",
  };

  const formattedPlaygroundData = playgrounds?.map((item) => ({
    id: item.id,
    name: item.title,
    
    // TODO: Add starred status later
    starred:false,
    icon: technologyIconMap[item.template] || "Code2", // fallback icon
    
  }));

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full overflow-x-hidden">
        {/* Dashboard Sidebar */}
        {/* @ts-ignore */}
        <DashboardSidebar initialPlaygroundData={formattedPlaygroundData}/>
        <main className="flex-1">{children}</main>
      </div>
    </SidebarProvider>
  );
}