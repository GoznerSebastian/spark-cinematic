'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

const frequencies = [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]
const tiers = [
    {
        name: 'Basic',
        id: 'tier-basic',
        href: '#',
        price: { monthly: '$99', annually: '$1080' },
        description: 'Perfect for small videography projects and solo creators.',
        features: ['Up to 5 video projects', 'Standard editing tools', '1-hour consultation', 'Email support'],
        mostPopular: false,
    },
    {
        name: 'Pro',
        id: 'tier-pro',
        href: '#',
        price: { monthly: '$199', annually: '$2160' },
        description: 'A comprehensive package for growing businesses.',
        features: [
            'Up to 15 video projects',
            'Advanced editing and effects',
            '5-hour consultation',
            'Priority support',
            'Monthly strategy sessions',
        ],
        mostPopular: true,
    },
    {
        name: 'Enterprise',
        id: 'tier-enterprise',
        href: '#',
        price: { monthly: '$399', annually: '$4320' },
        description: 'For enterprises looking for tailored video production and dedicated support.',
        features: [
            'Unlimited video projects',
            'Full video production',
            'Unlimited consultation',
            '24/7 dedicated support',
            'Custom marketing strategy',
            'Access to premium stock footage',
        ],
        mostPopular: false,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
    const [frequency, setFrequency] = useState(frequencies[0])

    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-orange-400">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Tailored Pricing for Your Videography Needs
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
                    Choose the plan that best suits your video production goals and budget.
                </p>
                <div className="mt-16 flex justify-center">
                    <fieldset aria-label="Payment frequency">
                        <RadioGroup
                            value={frequency}
                            onChange={setFrequency}
                            className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
                        >
                            {frequencies.map((option) => (
                                <Radio
                                    key={option.value}
                                    value={option}
                                    className="cursor-pointer rounded-full px-2.5 py-1 data-[checked]:bg-orange-500"
                                >
                                    {option.label}
                                </Radio>
                            ))}
                        </RadioGroup>
                    </fieldset>
                </div>
                <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {tiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={classNames(
                                tier.mostPopular ? 'bg-white/5 ring-2 ring-orange-500' : 'ring-1 ring-white/10',
                                'rounded-3xl p-8 xl:p-10',
                            )}
                        >
                            <div className="flex items-center justify-between gap-x-4">
                                <h3 id={tier.id} className="text-lg font-semibold leading-8 text-white">
                                    {tier.name}
                                </h3>
                                {tier.mostPopular ? (
                                    <p className="rounded-full bg-orange-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                                        Most popular
                                    </p>
                                ) : null}
                            </div>
                            <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-white">{tier.price[frequency.value]}</span>
                                <span className="text-sm font-semibold leading-6 text-gray-300">{frequency.priceSuffix}</span>
                            </p>
                            <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={classNames(
                                    tier.mostPopular
                                        ? 'bg-orange-500 text-white shadow-sm hover:bg-orange-400 focus-visible:outline-orange-500'
                                        : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                                    'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                                )}
                            >
                                Buy plan
                            </a>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-white" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
