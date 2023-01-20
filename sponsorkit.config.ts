import { defineConfig, presets } from 'sponsorkit'



export default defineConfig({
  onSponsorsReady:(sponsors)=>sponsors.filter((s)=>!s.isOneTime),
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: presets.xs,
    },
    {
      title: 'Backers',
      preset: presets.small,
    },
    {
      title: 'Bronze Sponsors',
      monthlyDollars: 100,
      preset: presets.medium,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 500,
      preset: presets.large,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 1000,
      preset: presets.large,
    },
    {
      title: 'Platinum Sponsors',
      monthlyDollars: 2500,
      preset: presets.large,
    },
    {
      title: 'Diamond Sponsors',
      monthlyDollars: 10000,
      preset: presets.large,
    },
  ]
})
