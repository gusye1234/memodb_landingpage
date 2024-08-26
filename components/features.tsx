export default function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      {/* <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div> */}
      {/* <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div> */}

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        {/* Items */}
        <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-1 lg:grid-cols-3 items-start md:max-w-lg lg:max-w-none">
          {/* 1st item */}
          <div className="relative flex flex-col items-center p-6 md:h-36 lg:h-48 bg-background rounded">
            <h2 className="font-semibold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                ❓ 我们是谁
              </span>{' '}
            </h2>
            <p className="text-gray-600 text-sm text-start">
              ELight团队全部由有留学经历的学长学姐组成。
              我们中有深耕留学服务的“老炮”，也有来自微软，腾讯等“AI技术大佬”。
            </p>
          </div>
          <div className="relative flex flex-col items-center md:h-36 lg:h-48 p-6 bg-background rounded">
            <h2 className="font-semibold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                💪 为什么选择我们
              </span>{' '}
            </h2>
            <p className="text-gray-600 text-sm text-start">
              基于人工智能技术，我们提供24小时的随时服务和定制化的留学方案，而只用1%的价格。
              每个同学拿到的，都是从多个成功留学案例中AI总结出来的最优解。
            </p>
          </div>

          <div className="relative flex flex-col items-center md:h-36 lg:h-48 p-6 bg-background rounded">
            <h2 className="font-semibold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                🎯 我们的愿景
              </span>{' '}
            </h2>
            <p className="text-gray-600 text-sm text-start">
              我们致力于把留学行业里经验和复杂性，转移到人工智能上。让每个同学都能
              <span className="font-bold">随时随地</span>
              享受到最好的留学服务。
            </p>
          </div>

          {/* 2nd item */}
        </div>
      </div>
    </section>
  )
}
