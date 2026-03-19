import { useState } from "react";
import { useAuth } from "@/lib/auth";
import { useCreateUser } from "@workspace/api-client-react";
import { MobileLayout } from "@/components/layout/MobileLayout";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, UserCircle, CreditCard, MapPin, Truck } from "lucide-react";
import { motion } from "framer-motion";

export default function Onboarding() {
  const { login } = useAuth();
  const { mutate: createUser, isPending } = useCreateUser();
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    panCard: "",
    deliveryId: "",
    zone: "North",
    plan: "bronze" as "bronze" | "silver" | "gold",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!formData.name || !formData.panCard || !formData.deliveryId) {
      setError("Please fill in all required fields.");
      return;
    }

    createUser(
      { data: formData },
      {
        onSuccess: (data) => {
          login(data.deliveryId);
        },
        onError: (err: any) => {
          setError(err.message || "Failed to create profile. Delivery ID might be in use.");
        }
      }
    );
  };

  return (
    <MobileLayout hideNav>
      <div className="relative min-h-full flex flex-col px-6 py-12">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-primary/90 to-accent/90 rounded-b-[3rem] -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mt-8 mb-10 text-white"
        >
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-xl border border-white/30">
            <ShieldCheck size={40} className="text-white" />
          </div>
          <h1 className="text-3xl font-display font-bold">GigShield AI</h1>
          <p className="text-white/80 mt-2 text-center text-sm px-4">
            Protecting your earnings against weather, traffic, and strikes.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-6 shadow-xl shadow-black/5 border border-gray-100 flex-1"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Create your profile</h2>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <UserCircle size={20} />
                </div>
                <input
                  type="text"
                  required
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                  placeholder="Rahul Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700 ml-1">PAN Card Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <CreditCard size={20} />
                </div>
                <input
                  type="text"
                  required
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all uppercase"
                  placeholder="ABCDE1234F"
                  value={formData.panCard}
                  onChange={(e) => setFormData({ ...formData, panCard: e.target.value.toUpperCase() })}
                />
              </div>
              <p className="text-[11px] text-gray-500 ml-1">Required for fraud prevention & claims</p>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700 ml-1">Delivery ID (Swiggy/Zomato)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Truck size={20} />
                </div>
                <input
                  type="text"
                  required
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                  placeholder="SW-98765432"
                  value={formData.deliveryId}
                  onChange={(e) => setFormData({ ...formData, deliveryId: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700 ml-1">Working Zone</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <MapPin size={20} />
                </div>
                <select
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none"
                  value={formData.zone}
                  onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                >
                  <option value="North">North Zone</option>
                  <option value="South">South Zone</option>
                  <option value="East">East Zone</option>
                  <option value="West">West Zone</option>
                  <option value="Central">Central Zone</option>
                </select>
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" size="xl" className="w-full" isLoading={isPending}>
                Complete Setup
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </MobileLayout>
  );
}
