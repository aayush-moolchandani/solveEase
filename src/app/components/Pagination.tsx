'use client'
type Props = {
  page: number
  pageCount: number
  onChange: (page: number) => void
}

export default function Pagination({ page, pageCount, onChange }: Props) {
  if (pageCount <= 1) return null
  const go = (p: number) => onChange(Math.min(Math.max(1, p), pageCount))

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button className="px-3 py-1 border rounded disabled:opacity-50" onClick={() => go(page - 1)} disabled={page === 1}>
        Prev
      </button>
      <span className="text-sm">Page {page} of {pageCount}</span>
      <button className="px-3 py-1 border rounded disabled:opacity-50" onClick={() => go(page + 1)} disabled={page === pageCount}>
        Next
      </button>
    </div>
  )
}


