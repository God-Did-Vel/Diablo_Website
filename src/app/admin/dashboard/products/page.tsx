'use client';

import React, { useEffect, useState } from 'react';
import { Package, Plus, Edit, Trash2, Check, X } from 'lucide-react';
import { AdminSidebar } from '../../../../components/dashboard/AdminSidebar';
import { AdminHeader } from '../../../../components/dashboard/AdminHeader';
import { GlassCard } from '../../../../components/ui/GlassCard';
import { Button } from '../../../../components/ui/Button';
import { fetchProducts } from '../../../../services/api';
import { Product } from '../../../../types';

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await fetchProducts(true);
    setProducts(data);
  };

  const handleEdit = (prod: Product) => {
    setEditingProduct({ ...prod });
    setIsNew(false);
  };

  const handleCreateNew = () => {
    setEditingProduct({
      id: '',
      name: 'Diablo New Edition',
      slug: `diablo-new-${Date.now()}`,
      volume: '500 ml',
      packaging: 'Glass Bottle',
      description: 'Ultra-pure table water in eco-luxury packaging.',
      price: 2.50,
      imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
      phLevel: 7.8,
      tdsLevel: 40,
      badge: 'New Release',
      inStock: true,
      featured: false,
      orderIndex: products.length + 1,
    });
    setIsNew(true);
  };

  const handleSave = () => {
    if (!editingProduct) return;
    if (isNew) {
      setProducts([...products, { ...editingProduct, id: String(Date.now()) }]);
    } else {
      setProducts(products.map((p) => (p.id === editingProduct.id ? editingProduct : p)));
    }
    setEditingProduct(null);
    alert('Product updated successfully!');
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-diablo-bg flex">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <AdminHeader title="Manage Products" subtitle="Create, edit, or remove water bottle products" />

        <main className="p-8 space-y-6 flex-1">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white font-display">Product Catalog List</h2>
            <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />} onClick={handleCreateNew}>
              Add New Bottle Product
            </Button>
          </div>

          {/* Product Table */}
          <GlassCard className="p-0 overflow-hidden border-diablo-border">
            <table className="w-full text-left text-sm text-diablo-muted">
              <thead className="bg-diablo-surface text-xs font-bold text-white uppercase border-b border-diablo-border">
                <tr>
                  <th className="p-4">Product Name</th>
                  <th className="p-4">Volume & Packaging</th>
                  <th className="p-4">Price ($)</th>
                  <th className="p-4">pH Balance</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-diablo-border">
                {products.map((prod) => (
                  <tr key={prod.id} className="hover:bg-diablo-surface/40">
                    <td className="p-4 flex items-center gap-3">
                      <img src={prod.imageUrl} alt={prod.name} className="w-10 h-10 object-contain" />
                      <div>
                        <div className="font-bold text-white">{prod.name}</div>
                        <div className="text-[11px] text-diablo-primary">{prod.badge || 'Standard'}</div>
                      </div>
                    </td>
                    <td className="p-4">{prod.volume} • {prod.packaging}</td>
                    <td className="p-4 font-bold text-white font-display">${prod.price.toFixed(2)}</td>
                    <td className="p-4 font-semibold text-diablo-primary">pH {prod.phLevel}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${prod.inStock ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                        {prod.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <button onClick={() => handleEdit(prod)} className="p-2 text-diablo-primary hover:bg-diablo-surface rounded-lg">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(prod.id)} className="p-2 text-red-400 hover:bg-diablo-surface rounded-lg">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassCard>

          {/* Edit Product Modal */}
          {editingProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <div className="glass-card bg-diablo-card p-6 rounded-3xl max-w-lg w-full border border-diablo-primary/40 space-y-4">
                <h3 className="text-xl font-bold text-white font-display">
                  {isNew ? 'Create New Product' : 'Edit Product Details'}
                </h3>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-diablo-muted uppercase font-semibold mb-1">Product Name</label>
                    <input
                      type="text"
                      value={editingProduct.name}
                      onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-diablo-surface border border-diablo-border text-white text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-diablo-muted uppercase font-semibold mb-1">Volume</label>
                      <input
                        type="text"
                        value={editingProduct.volume}
                        onChange={(e) => setEditingProduct({ ...editingProduct, volume: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-diablo-surface border border-diablo-border text-white text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-diablo-muted uppercase font-semibold mb-1">Price ($)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={editingProduct.price}
                        onChange={(e) => setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) })}
                        className="w-full p-2.5 rounded-xl bg-diablo-surface border border-diablo-border text-white text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-diablo-muted uppercase font-semibold mb-1">Packaging Description</label>
                    <input
                      type="text"
                      value={editingProduct.packaging}
                      onChange={(e) => setEditingProduct({ ...editingProduct, packaging: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-diablo-surface border border-diablo-border text-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-diablo-muted uppercase font-semibold mb-1">Image URL</label>
                    <input
                      type="text"
                      value={editingProduct.imageUrl}
                      onChange={(e) => setEditingProduct({ ...editingProduct, imageUrl: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-diablo-surface border border-diablo-border text-white text-sm"
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="primary" size="sm" className="w-full" onClick={handleSave}>
                    Save Changes
                  </Button>
                  <Button variant="secondary" size="sm" className="w-full" onClick={() => setEditingProduct(null)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
