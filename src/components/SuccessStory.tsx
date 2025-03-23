
export const SuccessStory = () => {
  return (
    <div className="w-full py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Success Story</h2>
            <p className="text-lg text-white/80 mb-6">
              Like many of our investors, you too can achieve financial growth without the complexities 
              of traditional investment methods. Our platform makes it simple to start your journey 
              towards financial freedom.
            </p>
            <div className="space-y-4 text-white/80">
              <div className="flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[#e73667]" />
                <p>Professional portfolio management</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[#e73667]" />
                <p>Transparent investment tracking</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[#e73667]" />
                <p>Regular profit distributions</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Successful investor smiling"
              className="rounded-lg shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
