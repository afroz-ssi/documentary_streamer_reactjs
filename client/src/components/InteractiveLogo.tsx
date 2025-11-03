import { Link } from "wouter";
import { Search, Compass, Zap, Eye, Sparkles, Globe } from "lucide-react";

export function InteractiveLogo() {
  return (
    <Link href="/">
      <div className="cursor-pointer flex items-center gap-3 group" data-testid="link-home">
        <div className="relative w-16 h-16">
          {/* Outer rotating ring with dashed border */}
          <div className="absolute inset-0 border-2 border-dashed border-purple-400 rounded-full animate-spin" style={{animationDuration: '12s'}}></div>
          {/* Middle counter-rotating ring */}
          <div className="absolute inset-1 border border-blue-400 rounded-full animate-spin" style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
          {/* Inner morphing shape */}
          <div className="absolute inset-3 bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 rounded-full animate-pulse flex items-center justify-center group-hover:rounded-lg transition-all duration-500">
            {/* Animated question mark */}
            <div className="text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300 animate-pulse">?</div>
          </div>
          {/* Orbiting icons */}
          <Search className="absolute -top-1 -right-1 w-4 h-4 text-purple-500 animate-bounce group-hover:text-purple-700" style={{animationDelay: '0s'}} />
          <Compass className="absolute -bottom-1 -left-1 w-4 h-4 text-blue-500 animate-bounce group-hover:text-blue-700" style={{animationDelay: '1s'}} />
          <Zap className="absolute top-1/2 -right-2 w-3 h-3 text-teal-500 animate-bounce group-hover:text-teal-700" style={{animationDelay: '2s'}} />
          <Eye className="absolute -top-2 left-1/2 w-3 h-3 text-purple-400 animate-bounce group-hover:text-purple-600" style={{animationDelay: '0.5s'}} />
          <Sparkles className="absolute -bottom-2 right-1/4 w-3 h-3 text-blue-400 animate-bounce group-hover:text-blue-600" style={{animationDelay: '1.5s'}} />
          <Globe className="absolute left-1/2 -left-2 top-1/4 w-3 h-3 text-teal-400 animate-bounce group-hover:text-teal-600" style={{animationDelay: '2.5s'}} />
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent group-hover:from-purple-700 group-hover:via-blue-700 group-hover:to-teal-700 transition-all duration-300">
            Undefined
          </span>
          <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider group-hover:text-purple-700 transition-colors duration-300">
            Explore
          </span>
        </div>
      </div>
    </Link>
  );
}