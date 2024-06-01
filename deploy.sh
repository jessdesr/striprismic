echo "PROJECT_NAME: $PROJECT_NAME";

if [[ "$PROJECT_NAME" == "blind-alley" ]] ; then
  # Proceed with the build
    echo "✅ - Build can proceed"
  exit 1;

else
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;
fi