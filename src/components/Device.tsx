import { useAIDrawStore } from '../stores/AIDrawStore'

interface DeviceProps {}

const Device: React.FC<DeviceProps> = () => {
  const deviceIdentifier = useAIDrawStore((state) => state.deviceIdentifier)
  return <div className="box">Device: {deviceIdentifier}</div>
}

export default Device
