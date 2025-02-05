import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const premiums = [
    {
        policyType: "Package Policy (OD + TP)",
        amount: 19876
    },
  ]
  
  export function PremiumPlansTable() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Policy Type</TableHead>
            <TableHead>Premium (Including GST)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {premiums.map((premium) => (
            <TableRow key={premium.policyType}>
              <TableCell className="font-medium">{premium.policyType}</TableCell>
              <TableCell>{premium.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  