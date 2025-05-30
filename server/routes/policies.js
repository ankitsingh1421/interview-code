import express from 'express';
import Policy from '../models/Policy.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get all policies (protected route)
router.get('/', authenticateToken, async (req, res) => {
  try {
    const policies = await Policy.find().sort({ createdAt: -1 });
    res.json(policies);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new policy
router.post('/', async (req, res) => {
  try {
    const policy = new Policy(req.body);
    await policy.save();
    res.status(201).json(policy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update policy
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const policy = await Policy.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!policy) {
      return res.status(404).json({ message: 'Policy not found' });
    }
    res.json(policy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete policy
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const policy = await Policy.findOneAndDelete({ id: req.params.id });
    if (!policy) {
      return res.status(404).json({ message: 'Policy not found' });
    }
    res.json({ message: 'Policy deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get dashboard statistics
router.get('/dashboard', authenticateToken, async (req, res) => {
  try {
    const activePolicies = await Policy.countDocuments({ status: 'Active' });
    const totalRevenue = await Policy.aggregate([
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);
    const expiringSoon = await Policy.countDocuments({ status: 'Expiring Soon' });
    const recentPolicies = await Policy.find()
      .sort({ createdAt: -1 })
      .limit(5);

    const policyDistribution = await Policy.aggregate([
      {
        $group: {
          _id: '$duration',
          count: { $sum: 1 }
        }
      }
    ]);

    res.json({
      activePolicies,
      totalRevenue: totalRevenue[0]?.total || 0,
      expiringSoon,
      recentPolicies,
      policyDistribution
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;