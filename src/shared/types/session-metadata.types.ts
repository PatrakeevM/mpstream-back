export interface LocationInfo {
  country: string;
  city: string;
  latitude: number;
  longitude: number;
}

export interface DeviceInfo {
  os: string;
  browser: string;
  type: string;
}

export interface SessionMetadata {
  location: LocationInfo;
  device: DeviceInfo;
  ip: string;
}
