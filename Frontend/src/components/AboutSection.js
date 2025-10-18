import React from "react";

export default function AboutSection() {
  const features = [
    {
      emoji: "🎯",
      title: "VibeMatch",
      description: "Pairs you on interests and timing, not swipes.",
    },
    {
      emoji: "☕",
      title: "MeetMe Moments",
      description: "Tap once to say you're free for coffee or study.",
    },
    {
      emoji: "🧩",
      title: "Friend Loops",
      description: "Tiny daily rituals that keep friendships alive.",
    },
    {
      emoji: "🔒",
      title: "Privacy First",
      description: "Hide exact distance, verify .edu, report in one tap.",
    },
  ];

  const steps = [
    { number: 1, text: "Create a profile (photo, interests, vibe)" },
    { number: 2, text: "Discover nearby people by category" },
    { number: 3, text: "Wave → chat → meet IRL when ready" },
  ];

  const stats = [
    { label: "Avg. time to first chat", value: "12m" },
    { label: "IRL meetups after matching", value: "68%" },
    { label: "Campus circles", value: "1,200+" },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 md:py-28 px-6 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Meet your people—without the awkward.
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            FriendFinder helps students and locals form real friendships through
            shared interests, spontaneous meetups, and low-pressure ways to say
            hello.
          </p>
        </div>

        <div
          role="list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              role="listitem"
              className="bg-white rounded-lg border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-500"
            >
              <div className="text-4xl mb-3" aria-hidden="true">
                {feature.emoji}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            How it works
          </h3>
          <div className="flex flex-col md:flex-row gap-8 md:gap-4 items-center justify-center">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center max-w-xs"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4 transition-transform duration-300 hover:scale-110">
                  {step.number}
                </div>
                <p className="text-gray-700">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-100 rounded-lg py-8 px-6 mb-16">
          <div className="flex flex-col md:flex-row justify-around items-center gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex-1">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-12 text-center max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Trust & Safety
          </h3>
          <p className="text-gray-600">
            We build for comfort and safety—controls for visibility, reporting,
            and verified communities.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
            href="/signup"
            aria-label="Sign up for a free week of FriendFinder"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Start Free Week
          </a>
          
            href="#how-it-works"
            aria-label="Learn more about how FriendFinder works"
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 transition-all duration-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            How it works
          </a>
        </div>
      </div>
    </section>
  );
}
