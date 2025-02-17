export default function Contact() {
    return (
        <div className="relative bg-white">
            <div className="lg:absolute lg:inset-0 lg:left-1/2">
                <img
                    alt="Videography contact image"
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
                    className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
                />
            </div>
            <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
                <div className="px-6 lg:px-8">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Let's Bring Your Vision to Life</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            We are here to capture your story. Get in touch with us to discuss your next project or collaboration.
                        </p>
                        <form action="#" method="POST" className="mt-16">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Last name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="last-name"
                                            name="last-name"
                                            type="text"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Company
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="company"
                                            name="company"
                                            type="text"
                                            autoComplete="organization"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between text-sm leading-6">
                                        <label htmlFor="phone" className="block font-semibold text-gray-900">
                                            Phone
                                        </label>
                                        <p id="phone-description" className="text-gray-400">
                                            Optional
                                        </p>
                                    </div>
                                    <div className="mt-2.5">
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            autoComplete="tel"
                                            aria-describedby="phone-description"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between text-sm leading-6">
                                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                            How can we help you?
                                        </label>
                                        <p id="message-description" className="text-gray-400">
                                            Max 500 characters
                                        </p>
                                    </div>
                                    <div className="mt-2.5">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            aria-describedby="message-description"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                                <fieldset className="sm:col-span-2">
                                    <legend className="block text-sm font-semibold leading-6 text-gray-900">Expected budget</legend>
                                    <div className="mt-4 space-y-4 text-sm leading-6 text-gray-600">
                                        <div className="flex gap-x-2.5">
                                            <input
                                                defaultValue="under_25k"
                                                id="budget-under-25k"
                                                name="budget"
                                                type="radio"
                                                className="mt-1 h-4 w-4 border-gray-300 text-orange-600 shadow-sm focus:ring-orange-600"
                                            />
                                            <label htmlFor="budget-under-25k">Less than $25K</label>
                                        </div>
                                        <div className="flex gap-x-2.5">
                                            <input
                                                defaultValue="25k-50k"
                                                id="budget-25k-50k"
                                                name="budget"
                                                type="radio"
                                                className="mt-1 h-4 w-4 border-gray-300 text-orange-600 shadow-sm focus:ring-orange-600"
                                            />
                                            <label htmlFor="budget-25k-50k">$25K – $50K</label>
                                        </div>
                                        <div className="flex gap-x-2.5">
                                            <input
                                                defaultValue="50k-100k"
                                                id="budget-50k-100k"
                                                name="budget"
                                                type="radio"
                                                className="mt-1 h-4 w-4 border-gray-300 text-orange-600 shadow-sm focus:ring-orange-600"
                                            />
                                            <label htmlFor="budget-50k-100k">$50K – $100K</label>
                                        </div>
                                        <div className="flex gap-x-2.5">
                                            <input
                                                defaultValue="over_100k"
                                                id="budget-over-100k"
                                                name="budget"
                                                type="radio"
                                                className="mt-1 h-4 w-4 border-gray-300 text-orange-600 shadow-sm focus:ring-orange-600"
                                            />
                                            <label htmlFor="budget-over-100k">$100K+</label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                                <button
                                    type="submit"
                                    className="rounded-md bg-orange-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                                >
                                    Send message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
