
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bitcoin, DollarSign, TrendingDown, TrendingUp } from "lucide-react";

export const MarketPrices = () => {
  const [cryptoPrices, setCryptoPrices] = useState<any[]>([]);
  const [forexPrices, setForexPrices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data for demonstration
  const mockCryptoPrices = [
    { symbol: "BTC", name: "Bitcoin", price: 58432.75, change: 2.34, volume: 43201345612 },
    { symbol: "ETH", name: "Ethereum", price: 3286.45, change: 1.87, volume: 21356478956 },
    { symbol: "BNB", name: "Binance Coin", price: 584.62, change: -0.76, volume: 5437891245 },
    { symbol: "SOL", name: "Solana", price: 143.28, change: 3.45, volume: 8976543210 },
    { symbol: "ADA", name: "Cardano", price: 0.57, change: -1.24, volume: 3456789012 },
    { symbol: "XRP", name: "XRP", price: 0.68, change: 0.98, volume: 4567890123 }
  ];

  const mockForexPrices = [
    { symbol: "EUR/USD", bid: 1.0782, ask: 1.0785, change: 0.12, spread: 3 },
    { symbol: "GBP/USD", bid: 1.2635, ask: 1.2639, change: -0.24, spread: 4 },
    { symbol: "USD/JPY", bid: 150.23, ask: 150.26, change: 0.32, spread: 3 },
    { symbol: "USD/CHF", bid: 0.9042, ask: 0.9046, change: -0.15, spread: 4 },
    { symbol: "AUD/USD", bid: 0.6578, ask: 0.6582, change: 0.08, spread: 4 },
    { symbol: "USD/CAD", bid: 1.3642, ask: 1.3646, change: 0.21, spread: 4 }
  ];

  useEffect(() => {
    // Simulating API fetch
    setTimeout(() => {
      setCryptoPrices(mockCryptoPrices);
      setForexPrices(mockForexPrices);
      setLoading(false);
    }, 1000);
    
    // Simulating real-time updates
    const interval = setInterval(() => {
      setCryptoPrices(prev => 
        prev.map(coin => ({
          ...coin,
          price: parseFloat((coin.price + (Math.random() - 0.5) * 0.01 * coin.price).toFixed(2)),
          change: parseFloat((coin.change + (Math.random() - 0.5) * 0.1).toFixed(2))
        }))
      );
      
      setForexPrices(prev => 
        prev.map(pair => {
          const bidChange = (Math.random() - 0.5) * 0.0005;
          return {
            ...pair,
            bid: parseFloat((pair.bid + bidChange).toFixed(4)),
            ask: parseFloat((pair.bid + bidChange + pair.spread / 10000).toFixed(4)),
            change: parseFloat((pair.change + (Math.random() - 0.5) * 0.05).toFixed(2))
          };
        })
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-[#002439]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Real-Time Market Prices</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Stay updated with the latest cryptocurrency and forex market prices to make informed investment decisions.
          </p>
        </div>
        
        <Tabs defaultValue="crypto" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="crypto" className="data-[state=active]:bg-[#e73667]">
              <Bitcoin className="mr-2 h-4 w-4" />
              Cryptocurrency
            </TabsTrigger>
            <TabsTrigger value="forex" className="data-[state=active]:bg-[#e73667]">
              <DollarSign className="mr-2 h-4 w-4" />
              Forex
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="crypto" className="mt-0">
            <Card className="bg-[#00395b] border-white/10 text-white overflow-hidden">
              <CardHeader className="bg-[#003049] pb-4">
                <CardTitle className="text-xl">Cryptocurrency Prices</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {loading ? (
                  <div className="flex justify-center items-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-white/70 border-b border-white/10">
                          <th className="px-6 py-3 text-left">Coin</th>
                          <th className="px-6 py-3 text-right">Price (USD)</th>
                          <th className="px-6 py-3 text-right">24h Change</th>
                          <th className="px-6 py-3 text-right">Volume (24h)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cryptoPrices.map((coin, index) => (
                          <tr key={index} className="border-b border-white/10 hover:bg-white/5">
                            <td className="px-6 py-4 flex items-center">
                              <span className="font-semibold mr-2">{coin.symbol}</span>
                              <span className="text-white/70">{coin.name}</span>
                            </td>
                            <td className="px-6 py-4 text-right font-mono">
                              ${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </td>
                            <td className={`px-6 py-4 text-right ${coin.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                              <div className="flex items-center justify-end">
                                {coin.change >= 0 ? 
                                  <TrendingUp className="mr-1 h-4 w-4" /> : 
                                  <TrendingDown className="mr-1 h-4 w-4" />
                                }
                                {coin.change >= 0 ? '+' : ''}{coin.change}%
                              </div>
                            </td>
                            <td className="px-6 py-4 text-right text-white/70 font-mono">
                              ${(coin.volume / 1000000).toFixed(2)}M
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="forex" className="mt-0">
            <Card className="bg-[#00395b] border-white/10 text-white overflow-hidden">
              <CardHeader className="bg-[#003049] pb-4">
                <CardTitle className="text-xl">Forex Market Prices</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {loading ? (
                  <div className="flex justify-center items-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-white/70 border-b border-white/10">
                          <th className="px-6 py-3 text-left">Pair</th>
                          <th className="px-6 py-3 text-right">Bid</th>
                          <th className="px-6 py-3 text-right">Ask</th>
                          <th className="px-6 py-3 text-right">Spread</th>
                          <th className="px-6 py-3 text-right">Daily Change</th>
                        </tr>
                      </thead>
                      <tbody>
                        {forexPrices.map((pair, index) => (
                          <tr key={index} className="border-b border-white/10 hover:bg-white/5">
                            <td className="px-6 py-4 font-semibold">{pair.symbol}</td>
                            <td className="px-6 py-4 text-right font-mono">{pair.bid}</td>
                            <td className="px-6 py-4 text-right font-mono">{pair.ask}</td>
                            <td className="px-6 py-4 text-right text-white/70">{pair.spread}</td>
                            <td className={`px-6 py-4 text-right ${pair.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                              <div className="flex items-center justify-end">
                                {pair.change >= 0 ? 
                                  <TrendingUp className="mr-1 h-4 w-4" /> : 
                                  <TrendingDown className="mr-1 h-4 w-4" />
                                }
                                {pair.change >= 0 ? '+' : ''}{pair.change}%
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-8 text-white/70 text-sm">
          <p>Data is updated in real-time. Prices may vary from actual market rates.</p>
          <p>Use these prices for informational purposes only.</p>
        </div>
      </div>
    </div>
  );
};
