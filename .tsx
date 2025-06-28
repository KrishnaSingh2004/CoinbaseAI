import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="text-slate-400 text-sm">{subtitle}</p>
        </div>
        <div className="flex items-center space-x-4">
          {/* Alert Indicator */}
          <div className="relative">
            <Bell className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </div>
          {/* Connection Status */}
          <Badge className="bg-green-500/20 border-green-500/30 text-green-400 hover:bg-green-500/30">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
            Connected
          </Badge>
        </div>
      </div>
    </header>
  );
}
