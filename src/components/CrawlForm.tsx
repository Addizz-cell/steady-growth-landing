
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { FirecrawlService } from '@/utils/FirecrawlService';
import { Card } from "@/components/ui/card";

interface CrawlResult {
  success: boolean;
  status?: string;
  completed?: number;
  total?: number;
  creditsUsed?: number;
  expiresAt?: string;
  data?: any[];
}

export const CrawlForm = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState('');
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [crawlResult, setCrawlResult] = useState<CrawlResult | null>(null);

  const handleSaveApiKey = () => {
    if (apiKey.trim()) {
      FirecrawlService.saveApiKey(apiKey.trim());
      toast({
        title: "Success",
        description: "API key saved successfully",
        duration: 3000,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setProgress(0);
    setCrawlResult(null);
    
    try {
      const result = await FirecrawlService.crawlWebsite(url);
      
      if (result.success) {
        toast({
          title: "Success",
          description: "Website crawled successfully",
          duration: 3000,
        });
        setCrawlResult(result.data);
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to crawl website",
          variant: "destructive",
          duration: 3000,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to crawl website",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
      setProgress(100);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-8">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-6">API Key Setup</h2>
        <div className="space-y-4">
          <Input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your Firecrawl API key"
            className="w-full"
          />
          <Button 
            onClick={handleSaveApiKey}
            className="w-full"
          >
            Save API Key
          </Button>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Website Crawler</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="url" className="text-sm font-medium">
              Website URL
            </label>
            <Input
              id="url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              required
            />
          </div>
          
          {isLoading && (
            <Progress value={progress} className="w-full" />
          )}
          
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? "Crawling..." : "Start Crawl"}
          </Button>
        </form>

        {crawlResult && (
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold">Crawl Results</h3>
            <div className="space-y-2 text-sm">
              <p>Status: {crawlResult.status}</p>
              <p>Completed Pages: {crawlResult.completed}</p>
              <p>Total Pages: {crawlResult.total}</p>
              <p>Credits Used: {crawlResult.creditsUsed}</p>
              <p>Expires At: {new Date(crawlResult.expiresAt || '').toLocaleString()}</p>
              {crawlResult.data && (
                <div className="mt-4">
                  <p className="font-semibold mb-2">Crawled Data:</p>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-auto max-h-60 text-left">
                    {JSON.stringify(crawlResult.data, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};
