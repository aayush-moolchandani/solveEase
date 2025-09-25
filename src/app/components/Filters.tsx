'use client'
import { useMemo } from 'react'

type Props = {
  minPrice: number
  maxPrice: number
  selectedMin: number
  selectedMax: number
  services: string[]
  selectedService: string
  onPriceChange: (min: number, max: number) => void
  onServiceChange: (service: string) => void
}

export default function Filters({
  minPrice,
  maxPrice,
  selectedMin,
  selectedMax,
  services,
  selectedService,
  onPriceChange,
  onServiceChange,
}: Props) {
  const uniqueServices = useMemo(() => ['All', ...services], [services])
  return (
    <section className="flex flex-wrap items-end gap-4">
      <div>
        <label className="block text-sm font-medium">Service</label>
        <select
          className="mt-1 border rounded-md px-3 py-2 bg-white"
          value={selectedService}
          onChange={(e) => onServiceChange(e.target.value)}
        >
          {uniqueServices.map(svc => (
            <option key={svc} value={svc}>{svc}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Min Price</label>
        <input
          type="number"
          className="mt-1 border rounded-md px-3 py-2 w-32"
          min={minPrice}
          max={selectedMax}
          value={selectedMin}
          onChange={(e) => onPriceChange(Number(e.target.value), selectedMax)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Max Price</label>
        <input
          type="number"
          className="mt-1 border rounded-md px-3 py-2 w-32"
          min={selectedMin}
          max={maxPrice}
          value={selectedMax}
          onChange={(e) => onPriceChange(selectedMin, Number(e.target.value))}
        />
      </div>
    </section>
  )
}


