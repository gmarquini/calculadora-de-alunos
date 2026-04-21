type Props = {
  children: React.ReactNode
}

export function Button({ children }: Props) {
  return (
    <button
      type="submit"
      className="flex items-center justify-center h-7 w-40 bg-blue-500 text-white rounded-md mt-5 cursor-pointer hover:bg-blue-700 transition ease-linear"
    >
      {children}
    </button>
  )
}
