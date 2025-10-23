import { MoreVertical, CreditCard, Building2 } from "lucide-react";

interface Transaction {
  id: string;
  cardType: string;
  cardNumber: string;
  date: string;
  time: string;
  amount: string;
  status: "Success" | "Pending" | "Declined";
}

const transactions: Transaction[] = [
  {
    id: "1",
    cardType: "mastercard",
    cardNumber: "09876543",
    date: "17 Jun 2025",
    time: "11:21 AM",
    amount: "SAR 350.00",
    status: "Pending",
  },
  {
    id: "2",
    cardType: "visa",
    cardNumber: "09876543",
    date: "17 Jun 2025",
    time: "11:21 AM",
    amount: "SAR 350.00",
    status: "Success",
  },
  {
    id: "3",
    cardType: "bank",
    cardNumber: "09876543",
    date: "17 Jun 2025",
    time: "11:21 AM",
    amount: "SAR 350.00",
    status: "Success",
  },
  {
    id: "4",
    cardType: "visa",
    cardNumber: "09876543",
    date: "17 Jun 2025",
    time: "11:21 AM",
    amount: "SAR 350.00",
    status: "Declined",
  },
];

const CardIcon = ({ cardType }: { cardType: string }) => {
  if (cardType === "mastercard") {
    return (
      <img 
        src="/assets/images/mastercard-logo.jpg" 
        alt="Mastercard" 
        className="w-10 h-10 object-contain"
      />
    );
  }
  
  if (cardType === "visa") {
    return (
      <img 
        src="/assets/images/visa-logo.png" 
        alt="VISA" 
        className="w-10 h-10 object-contain"
      />
    );
  }
  
  if (cardType === "bank") {
    return (
      <img 
        src="/assets/images/mada-logo.png" 
        alt="Mada" 
        className="w-10 h-10 object-contain"
      />
    );
  }
  
  return <CreditCard className="w-10 h-10 text-gray-500" />;
};

const statusColors = {
  Success: "bg-green-500 text-white",
  Pending: "bg-orange-500 text-white",
  Declined: "bg-red-500 text-white",
};

export default function LatestTransactions() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 md:p-6">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h2 className="text-base sm:text-lg font-bold text-gray-900">Latest Transactions</h2>
        <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <MoreVertical size={16} className="text-gray-600 sm:w-5 sm:h-5" />
        </button>
      </div>

      <div className="space-y-4">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10">
                <CardIcon cardType={tx.cardType} />
              </div>
              <span className="font-medium text-gray-900 text-sm">
                {tx.cardNumber}
              </span>
            </div>

            <div className="text-center">
              <p className="font-medium text-gray-900 text-xs">{tx.date}</p>
              <p className="text-gray-500 text-xs">{tx.time}</p>
            </div>

            <div className="text-right">
              <p className="font-semibold text-gray-900 text-sm mb-1">{tx.amount}</p>
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                  statusColors[tx.status]
                }`}
              >
                {tx.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

