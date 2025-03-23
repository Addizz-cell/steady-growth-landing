
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bitcoin, DollarSign, TrendingDown, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

export const MarketPrices = () => {
  const [cryptoPrices, setCryptoPrices] = useState<any[]>([]);
  const [forexPrices, setForexPrices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Enhanced mock data with more pairs
  const mockCryptoPrices = [
    { symbol: "BTC", name: "Bitcoin", price: 58432.75, change: 2.34, volume: 43201345612 },
    { symbol: "ETH", name: "Ethereum", price: 3286.45, change: 1.87, volume: 21356478956 },
    { symbol: "BNB", name: "Binance Coin", price: 584.62, change: -0.76, volume: 5437891245 },
    { symbol: "SOL", name: "Solana", price: 143.28, change: 3.45, volume: 8976543210 },
    { symbol: "ADA", name: "Cardano", price: 0.57, change: -1.24, volume: 3456789012 },
    { symbol: "XRP", name: "XRP", price: 0.68, change: 0.98, volume: 4567890123 },
    { symbol: "DOT", name: "Polkadot", price: 7.32, change: -2.14, volume: 2876543210 },
    { symbol: "DOGE", name: "Dogecoin", price: 0.12, change: 5.67, volume: 3217654980 },
    { symbol: "AVAX", name: "Avalanche", price: 36.89, change: 4.23, volume: 1987654320 },
    { symbol: "LINK", name: "Chainlink", price: 14.56, change: -0.89, volume: 1543267890 }
  ];

  const mockForexPrices = [
    { symbol: "EUR/USD", bid: 1.0782, ask: 1.0785, change: 0.12, spread: 3 },
    { symbol: "GBP/USD", bid: 1.2635, ask: 1.2639, change: -0.24, spread: 4 },
    { symbol: "USD/JPY", bid: 150.23, ask: 150.26, change: 0.32, spread: 3 },
    { symbol: "USD/CHF", bid: 0.9042, ask: 0.9046, change: -0.15, spread: 4 },
    { symbol: "AUD/USD", bid: 0.6578, ask: 0.6582, change: 0.08, spread: 4 },
    { symbol: "USD/CAD", bid: 1.3642, ask: 1.3646, change: 0.21, spread: 4 },
    { symbol: "NZD/USD", bid: 0.6039, ask: 0.6043, change: -0.09, spread: 4 },
    { symbol: "EUR/GBP", bid: 0.8532, ask: 0.8536, change: 0.05, spread: 4 },
    { symbol: "AUD/JPY", bid: 98.82, ask: 98.86, change: -0.18, spread: 4 },
    { symbol: "EUR/JPY", bid: 162.05, ask: 162.09, change: 0.42, spread: 4 }
  ];

  useEffect(() => {
    // Simulating API fetch
    setTimeout(() => {
      setCryptoPrices(mockCryptoPrices);
      setForexPrices(mockForexPrices);
      setLoading(false);
    }, 1000);
    
    // Simulating real-time updates with more realistic small changes
    const interval = setInterval(() => {
      setCryptoPrices(prev => 
        prev.map(coin => {
          const randomChange = (Math.random() - 0.5) * 0.01 * coin.price;
          const newPrice = parseFloat((coin.price + randomChange).toFixed(2));
          const newChangePercent = parseFloat((coin.change + (Math.random() - 0.5) * 0.1).toFixed(2));
          
          return {
            ...coin,
            price: newPrice,
            change: newChangePercent,
            priceFlash: randomChange > 0 ? 'up' : 'down'
          };
        })
      );
      
      setForexPrices(prev => 
        prev.map(pair => {
          const bidChange = (Math.random() - 0.5) * 0.0005;
          const newBid = parseFloat((pair.bid + bidChange).toFixed(4));
          const newAsk = parseFloat((newBid + pair.spread / 10000).toFixed(4));
          const newChangePercent = parseFloat((pair.change + (Math.random() - 0.5) * 0.05).toFixed(2));
          
          return {
            ...pair,
            bid: newBid,
            ask: newAsk,
            change: newChangePercent,
            priceFlash: bidChange > 0 ? 'up' : 'down'
          };
        })
      );
    }, 3000);
    
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
                              <div className="flex items-center">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#e73667]/80 to-[#e73667] flex items-center justify-center mr-3 text-xs font-bold">
                                  {coin.symbol.substring(0, 1)}
                                </div>
                                <div>
                                  <span className="font-semibold mr-2">{coin.symbol}</span>
                                  <span className="text-white/70">{coin.name}</span>
                                </div>
                              </div>
                            </td>
                            <td className={`px-6 py-4 text-right font-mono ${coin.priceFlash === 'up' ? 'text-green-400' : coin.priceFlash === 'down' ? 'text-red-400' : ''}`}>
                              ${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </td>
                            <td className={`px-6 py-4 text-right ${coin.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                              <div className="flex items-center justify-end">
                                {coin.change >= 0 ? 
                                  <ArrowUpRight className="mr-1 h-4 w-4" /> : 
                                  <ArrowDownRight className="mr-1 h-4 w-4" />
                                }
                                <span className="font-medium">
                                  {coin.change >= 0 ? '+' : ''}{coin.change}%
                                </span>
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
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <div className="bg-gradient-to-r from-[#003049] to-[#00395b] border border-white/10 rounded px-2 py-1 mr-2">
                                  <span className="font-semibold">{pair.symbol}</span>
                                </div>
                                {pair.change >= 0 ? 
                                  <div className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">Bullish</div> : 
                                  <div className="text-xs px-2 py-0.5 bg-red-500/20 text-red-400 rounded">Bearish</div>
                                }
                              </div>
                            </td>
                            <td className={`px-6 py-4 text-right font-mono ${pair.priceFlash === 'up' ? 'text-green-400' : pair.priceFlash === 'down' ? 'text-red-400' : ''}`}>
                              {pair.bid.toFixed(4)}
                            </td>
                            <td className={`px-6 py-4 text-right font-mono ${pair.priceFlash === 'up' ? 'text-green-400' : pair.priceFlash === 'down' ? 'text-red-400' : ''}`}>
                              {pair.ask.toFixed(4)}
                            </td>
                            <td className="px-6 py-4 text-right text-white/70">
                              <span className="px-2 py-0.5 bg-white/5 rounded">{pair.spread}</span>
                            </td>
                            <td className={`px-6 py-4 text-right ${pair.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                              <div className="flex items-center justify-end">
                                {pair.change >= 0 ? 
                                  <ArrowUpRight className="mr-1 h-4 w-4" /> : 
                                  <ArrowDownRight className="mr-1 h-4 w-4" />
                                }
                                <span className="font-medium">
                                  {pair.change >= 0 ? '+' : ''}{pair.change}%
                                </span>
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
          <p>Data updates every few seconds. Prices simulated for demonstration purposes.</p>
          <p className="text-white/50 text-xs mt-1">Use these prices for informational purposes only.</p>
        </div>
      </div>
    </div>
  );
};
