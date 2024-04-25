import Link from "next/link"

const CheckoutButton = () => {


    return (
      <div>
          <Link
            href="/checkout"
            className="text-gray-700 text-base hover:text-gray-900 focus:outline-none"
        >
            Check Out
        </Link>
      </div>
    )
}

export default CheckoutButton