export default function TaskTableComponent() {
  return (
    <div>
      <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 border border-gray-300">
                <div className="flex items-center gap-2">Title</div>
              </th>
              <th className="border border-gray-300 whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Description</div>
              </th>
              <th className="border border-gray-300 whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Priority</div>
              </th>
              <th className="border border-gray-300 whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Status
              </th>
              <th className="border border-gray-300 whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">John Frusciante</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">john@rhcp.com</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">$783.23</td>
              <td className="whitespace-nowrap px-4 py-2">
                <strong className="rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700">Cancelled</strong>
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
                  View
                </a>
                <input type="checkbox" />
              </td>
            </tr>

            <tr>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">George Harrison</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">george@beatles.com</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">$128.99</td>
              <td className="whitespace-nowrap px-4 py-2">
                <strong className="rounded bg-green-100 px-3 py-1.5 text-xs font-medium text-green-700">Paid</strong>
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
                  View
                </a>
              </td>
            </tr>

            <tr>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">Dave Gilmour</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">dave@pinkfloyd.com</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">$459.43</td>
              <td className="whitespace-nowrap px-4 py-2">
                <strong className="rounded bg-amber-100 px-3 py-1.5 text-xs font-medium text-amber-700">
                  Partially Refunded
                </strong>
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
                  View
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
