'use client'
import Image from 'next/image'
import { memo } from 'react'
import { WorkerType } from '@/types/workers'

type Props = { worker: WorkerType }

function WorkerCardBase({ worker }: Props) {
  return (
    <article className="rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative w-full h-48">
        <Image src={worker.image} alt={worker.name} fill className="object-cover" loading="lazy" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{worker.name}</h3>
        <p className="text-gray-600">{worker.service}</p>
        <p className="mt-2 font-medium">₹{Math.round(worker.pricePerDay * 1.18)} / day</p>
      </div>
    </article>
  )
}

const WorkerCard = memo(WorkerCardBase)
export default WorkerCard


