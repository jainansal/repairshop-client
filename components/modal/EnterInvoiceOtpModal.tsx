import { toast } from "@/hooks/use-toast";
import { useModal } from "@/hooks/useModalStore";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { validateOtpForInvoice } from "@/services/service";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { GetInvoiceDto } from "@/lib/dto";

const formSchema = z.object({
  otp: z
    .string()
    .min(6, "OTP must be 6 characters")
    .max(6, "OTP must be 6 characters"),
});

const EnterInvoiceOtpModal = () => {
  const [loading, setLoading] = useState(false);
  const { isOpen, type, onClose, data, onOpen } = useModal();
  const isModalOpen = isOpen && type === "enterInvoiceOtp";
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (data.invoiceId) {
        setLoading(true);
        const response = await validateOtpForInvoice(
          data.invoiceId,
          values.otp
        );
        const invoice: GetInvoiceDto = response.data;
        onClose();
        onOpen("invoiceDetails", { invoice, service: data.service });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Some error occured while generating the invoice",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      form.reset();
      onClose();
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-blue-600 p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle>Enter OTP sent to customer's mobile number</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            className="space-y-4 overflow-hidden flex flex-col"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <div className="space-y-4 px-6 h-full overflow-auto">
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={loading}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        placeholder="Enter OTP"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button disabled={loading} variant={"primary"} type="submit">
                Confirm
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EnterInvoiceOtpModal;
