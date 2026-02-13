import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d';

export class SplatViewerApp {
  private iframeContainer: HTMLDivElement;
  private plyViewerContainer: HTMLDivElement;
  private viewer: any;

  constructor() {
    this.iframeContainer = document.getElementById('viewer-container') as HTMLDivElement;
    this.plyViewerContainer = document.getElementById('ply-viewer-container') as HTMLDivElement;
  }

  public init(): void {
    this.setupModelViewer();
    this.setupPlyViewer();
    this.handleWindowResize();
    window.addEventListener('resize', () => this.handleWindowResize());
  }

  private setupModelViewer(): void {
    // Load model.html in iframe
    const iframe = document.createElement('iframe');
    iframe.src = 'model.html';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.display = 'block';
    this.iframeContainer.appendChild(iframe);
  }

  private setupPlyViewer(): void {
    // Create Gaussian Splat viewer for gau-spl.ply
    this.viewer = new GaussianSplats3D.Viewer({
      cameraUp: [0, -1, 0],
      initialCameraPosition: [0, 0, 5],
      initialCameraLookAt: [0, 0, 0],
      rootElement: this.plyViewerContainer,
      sharedMemoryForWorkers: false
    });

    this.viewer.addSplatScene('gau-spl.ply', {
      splatAlphaRemovalThreshold: 5,
      showLoadingUI: true,
      position: [0, 0, 0],
      rotation: [0, 0, 0, 1],
      scale: [1, 1, 1]
    })
    .then(() => {
      this.viewer.start();
    })
    .catch((error: Error) => {
      console.error('Error loading PLY file:', error);
    });
  }

  private handleWindowResize(): void {
    // The Gaussian Splat viewer handles its own resize
  }
}