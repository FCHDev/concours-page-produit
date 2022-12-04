import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const sizeOptions = [
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: 'XXL', inStock: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SizeRectangle() {
    const [mem, setMem] = useState(sizeOptions[2])

    return (
        <RadioGroup value={mem} onChange={setMem} className="mt-2 md:mb-0 mb-5">
                <RadioGroup.Label className="sr-only"> Choose a memory option </RadioGroup.Label>
                <div className="grid gap-3 grid-cols-6">
                    {sizeOptions.map((option) => (
                        <RadioGroup.Option
                            key={option.name}
                            value={option}
                            className={({ active, checked }) =>
                                classNames(
                                    option.inStock ? 'cursor-pointer focus:outline-none' : 'opacity-25 cursor-not-allowed',
                                    active ? 'ring-2 ring-offset-2 ring-[#B0E298]' : '',
                                    checked
                                        ? 'bg-[#B0E298] border-transparent text-gray-900 hover:bg-[#B0E298]'
                                        : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                                    'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                                )
                            }
                            disabled={!option.inStock}
                        >
                            <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
                        </RadioGroup.Option>
                    ))}
                </div>
            </RadioGroup>
    )
}
