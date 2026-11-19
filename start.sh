#!/usr/bin/env bash
# Quick Start Script for B.K. Associates Website
cd "$(dirname "$0")" || exit
echo "=========================================="
echo "  Starting B.K. Associates Website..."
echo "  Local:   http://localhost:5173"
echo "  Network: http://$(hostname -I | awk '{print $1}'):5173"
echo "=========================================="
npm run dev
