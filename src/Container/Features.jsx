import React from 'react'

const Features = () => {
  return (
                <div className="container mx-auto mt-12 ">
                <div className="flex flex-cols-1 gap-6 mb-6 lg:flex-cols-3">
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total users
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            12,00
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total Profit
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            $ 450k
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total Orders
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            20k
                        </div>
                    </div>
                </div>

{/**gpt side */}

<div className="container mx-auto mt-12 ">
  <div className="flex flex-cols-1 gap-6 mb-6 lg:flex-cols-3 max-w-screen-2xl mx-auto">
    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
      <div className="text-sm font-medium text-gray-500 truncate">
        Total users
      </div>
      <div className="mt-1 text-3xl font-semibold text-gray-900">
        12,00
      </div>
    </div>
    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
      <div className="text-sm font-medium text-gray-500 truncate">
        Total Profit
      </div>
      <div className="mt-1 text-3xl font-semibold text-gray-900">
        $ 450k
      </div>
    </div>
    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
      <div className="text-sm font-medium text-gray-500 truncate">
        Total Orders
      </div>
      <div className="mt-1 text-3xl font-semibold text-gray-900">
        20k
      </div>
    </div>
  </div>
</div>











            </div>

  )
}

export default Features