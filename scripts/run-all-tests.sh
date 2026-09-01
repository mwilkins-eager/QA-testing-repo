#!/usr/bin/env bash
# Script para ejecutar todas las pruebas del repositorio de QA

set -e

echo "=== Ejecutando pruebas unitarias ==="
npm run test:unit

echo "=== Ejecutando pruebas de integración ==="
npm run test:integration

echo "=== Todas las pruebas completadas ==="
