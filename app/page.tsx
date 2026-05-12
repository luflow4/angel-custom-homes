
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Mail, Menu, Phone, X } from 'lucide-react';
import { useMemo, useState } from 'react';

const site = {
  brand: 'ANGEL CUSTOM HOMES',
  phone: '214.957.9137',
  email: 'angel@acustomhomes.com',
};

const projects = [
  {
    name: 'French Transitional Estate',
    type: 'Luxury New Construction',
    location: 'Southlake, Texas',
    image: '/projects/french-estate-day.jpg',
  },
  {
    name: 'Private Evening Residence',
    type: 'Custom Stone Estate',
    location: 'Dallas-Fort Worth',
    image: '/projects/night-estate.jpg',
  },
  {
    name: 'Mediterranean Villa',
    type: 'Resort-Style Luxury Home',
    location: 'DFW Metro',
    image: '/projects/mediterranean-villa.jpg',
  },
];

export default function Home() {
  return <main>Updated Angel Custom Homes page.</main>;
}
