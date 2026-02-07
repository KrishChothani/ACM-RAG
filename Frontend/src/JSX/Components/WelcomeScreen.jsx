/** @format */

import { useState } from "react";
import { 
  Bot, 
  FileText, 
  TrendingUp, 
  MessageSquare, 
  Search,
  Sparkles,
  Upload,
  BarChart3,
  Calculator,
  PieChart,
  ArrowRight,
  Lightbulb
} from "lucide-react";

const WelcomeScreen = ({ feature, onExampleClick, onFeatureSelect }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = {
    Smart_Chat: {
      icon: Bot,
      title: "Smart Chat",
      description: "Intelligent conversations with text and image support",
      color: "from-blue-500 to-cyan-500",
      examples: [
        "Explain common medical symptoms and conditions",
        "What are the key health indicators to monitor?",
        "How do I maintain a healthy lifestyle?",
        "Compare different treatment approaches"
      ]
    },
    Document_Analysis: {
      icon: FileText,
      title: "Document Analysis",
      description: "Deep analysis of medical records and health reports",
      color: "from-green-500 to-emerald-500",
      examples: [
        "Analyze this medical test report",
        "Summarize key insights from this health record",
        "What are the main health concerns mentioned in this document?",
        "Extract vital signs and metrics from this report"
      ]
    },
    Analytical_Insights: {
      icon: TrendingUp,
      title: "Analytical Insights",
      description: "Advanced health analytics and wellness trend analysis",
      color: "from-purple-500 to-pink-500",
      examples: [
        "Track my vital signs trends over time",
        "Analyze my health improvement patterns",
        "What's my overall wellness trend?",
        "Compare my health metrics month-over-month"
      ]
    },
    General_Conversation: {
      icon: MessageSquare,
      title: "General Conversation",
      description: "Casual health discussions and Q&A",
      color: "from-orange-500 to-red-500",
      examples: [
        "What's the difference between bacteria and viruses?",
        "Explain blood pressure in simple terms",
        "How does exercise affect my overall health?",
        "What are some basic wellness tips?"
      ]
    },
    Multi_Document_Search: {
      icon: Search,
      title: "Multi-Document Search",
      description: "Search and compare across multiple documents",
      color: "from-indigo-500 to-purple-500",
      examples: [
        "Compare revenue across all uploaded reports",
        "Find mentions of 'risk factors' in all documents",
        "What are the common themes across these files?",
        "Search for specific metrics in multiple reports"
      ]
    }
  };

  const currentFeature = features[feature] || features.Smart_Chat;
  const CurrentIcon = currentFeature.icon;

  const quickActions = [
    {
      icon: Upload,
      title: "Upload Documents",
      description: "Analyze medical reports, lab results, and more",
      action: () => document.querySelector('input[type="file"]')?.click()
    },
    {
      icon: BarChart3,
      title: "Health Analysis",
      description: "Get insights from your health data",
      action: () => onExampleClick("Analyze my overall health and wellness")
    },
    {
      icon: Calculator,
      title: "Health Metrics",
      description: "Track important health indicators",
      action: () => onExampleClick("Show my key health metrics")
    },
    {
      icon: PieChart,
      title: "Wellness Insights",
      description: "Understand health trends and recommendations",
      action: () => onExampleClick("What are the current wellness recommendations?")
    }
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-4xl mx-auto relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10 pointer-events-none" />
      {/* Header Section */}
      <div className="text-center mb-12 relative z-10">
        <div className="relative mb-6">
          <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${currentFeature.color} p-4 mx-auto mb-4 shadow-lg animate-pulse`}>
            <CurrentIcon className="w-full h-full text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
            <Sparkles className="w-4 h-4 text-yellow-800" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Welcome to HealthCare Assistant
        </h1>
        
        <p className="text-xl text-gray-300 mb-2">
          Your AI-powered health and wellness assistant
        </p>
        
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
          <span>Currently using:</span>
          <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${currentFeature.color} text-white font-medium`}>
            {currentFeature.title}
          </span>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 w-full relative z-10">
        {Object.entries(features).map(([key, featureData]) => {
          const FeatureIcon = featureData.icon;
          const isActive = key === feature;
          const isHovered = hoveredCard === key;
          
          return (
            <div
              key={key}
              className={`relative p-6 rounded-xl border transition-all duration-300 cursor-pointer group transform hover:scale-105 ${
                isActive 
                  ? `border-transparent bg-gradient-to-r ${featureData.color} shadow-lg shadow-blue-500/25` 
                  : 'border-gray-700 bg-gray-800/50 hover:border-gray-600 hover:bg-gray-800 hover:shadow-lg'
              }`}
              onMouseEnter={() => setHoveredCard(key)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => onFeatureSelect(key)}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg ${
                  isActive ? 'bg-white/20' : 'bg-gray-700'
                }`}>
                  <FeatureIcon className={`w-6 h-6 ${
                    isActive ? 'text-white' : 'text-gray-300'
                  }`} />
                </div>
                
                <div className="flex-1">
                  <h3 className={`font-semibold mb-2 ${
                    isActive ? 'text-white' : 'text-gray-200'
                  }`}>
                    {featureData.title}
                  </h3>
                  <p className={`text-sm ${
                    isActive ? 'text-white/80' : 'text-gray-400'
                  }`}>
                    {featureData.description}
                  </p>
                </div>
              </div>
              
              {isActive && (
                <div className="absolute top-2 right-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Example Prompts */}
      <div className="w-full mb-8 relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <Lightbulb className="w-5 h-5 text-yellow-400" />
          <h2 className="text-xl font-semibold text-gray-200">
            Try these examples with {currentFeature.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {currentFeature.examples.map((example, index) => (
            <button
              key={index}
              onClick={() => onExampleClick(example)}
              className="text-left p-4 rounded-lg border border-gray-700 bg-gray-800/30 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {example}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="w-full relative z-10">
        <h2 className="text-xl font-semibold text-gray-200 mb-6 text-center">
          Quick Actions
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => {
            const ActionIcon = action.icon;
            
            return (
              <button
                key={index}
                onClick={action.action}
                className="p-4 rounded-lg border border-gray-700 bg-gray-800/30 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-200 group text-center"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-lg bg-gray-700 group-hover:bg-blue-600 transition-colors">
                    <ActionIcon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-200 group-hover:text-white transition-colors mb-1">
                      {action.title}
                    </h3>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                      {action.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center relative z-10">
        <p className="text-sm text-gray-500">
          Start by typing a message, uploading a document, or selecting an example above
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;