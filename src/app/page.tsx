"use client"
import useSWR from 'swr'
import { useEffect, useMemo, useState } from 'react'
import { WorkerType } from '@/types/workers'
import WorkerCard from './components/WorkerCard'
import SkeletonCard from './components/SkeletonCard'
import Filters from './components/Filters'
import Pagination from './components/Pagination'

const fetcher = (url: string) => fetch(url, { cache: 'force-cache' }).then(res => res.json())

export default function WorkersPage() {
  // SWR for data fetching and caching
  const { data, error, isLoading } = useSWR<{ success: boolean, data: WorkerType[] }>(
    '/api/wprkers',
    fetcher,
    { revalidateOnFocus: false, dedupingInterval: 60_000 }
  )

  // Derive base data
  const workersData = data?.data ?? []

  // Compute price bounds and services
  const { minPrice, maxPrice, services } = useMemo(() => {
    const prices = workersData.map(w => w.pricePerDay)
    return {
      minPrice: prices.length ? Math.min(...prices) : 0,
      maxPrice: prices.length ? Math.max(...prices) : 0,
      services: Array.from(new Set(workersData.map(w => w.service))).sort(),
    }
  }, [workersData])

  // Filters
  const [selectedService, setSelectedService] = useState<string>('All')
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice])
  const [min, max] = priceRange
  // Initialize/sync price range when bounds change
  useEffect(() => {
    if (workersData.length) {
      setPriceRange(([curMin, curMax]) => {
        const nextMin = Number.isFinite(curMin) && curMin !== 0 ? curMin : minPrice
        const nextMax = Number.isFinite(curMax) && curMax !== 0 ? curMax : maxPrice
        return [nextMin, nextMax]
      })
    }
  }, [workersData.length, minPrice, maxPrice])

  const filtered = useMemo(() => {
    return workersData
      .filter(w => (selectedService === 'All' ? true : w.service === selectedService))
      .filter(w => w.pricePerDay >= min && w.pricePerDay <= max)
      .sort((a, b) => a.name.localeCompare(b.name))
  }, [workersData, selectedService, min, max])

  // Pagination
  const PAGE_SIZE = 12
  const [page, setPage] = useState<number>(1)
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const start = (page - 1) * PAGE_SIZE
  const pageItems = filtered.slice(start, start + PAGE_SIZE)

  // Reset page when filters change
  const handleServiceChange = (svc: string) => { setPage(1); setSelectedService(svc) }
  const handlePriceChange = (mn: number, mx: number) => { setPage(1); setPriceRange([mn, mx]) }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Workers</h1>

      {/* Original local import logic retained (commented) per assignment */}
      {/**
       const response = await import('../../workers.json')
       setWorkersData(response.default)
      */}

      {/* Filters */}
      <div className="mb-6">
        <Filters
          minPrice={minPrice}
          maxPrice={maxPrice}
          selectedMin={min}
          selectedMax={max}
          services={services}
          selectedService={selectedService}
          onPriceChange={handlePriceChange}
          onServiceChange={handleServiceChange}
        />
      </div>

      {/* Loading state */}
      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="text-center text-red-600">Failed to load workers. Please try again.</div>
      )}

      {/* List */}
      {!isLoading && !error && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {pageItems.map(worker => (
              <WorkerCard key={worker.id} worker={worker} />
            ))}
          </div>
          <Pagination page={page} pageCount={pageCount} onChange={setPage} />
        </>
      )}
    </main>
  )
}
