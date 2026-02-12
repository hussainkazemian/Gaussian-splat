export class SplatViewerApp {
  private iframeContainer: HTMLDivElement;
  private infoContainer: HTMLElement;

  constructor() {
    this.iframeContainer = document.getElementById('viewer-container') as HTMLDivElement;
    this.infoContainer = document.getElementById('info-text') as HTMLElement;
  }

  public init(): void {
    this.setupViewer();
    this.setupInfo();
    this.handleWindowResize();
    window.addEventListener('resize', () => this.handleWindowResize());
  }

  private setupViewer(): void {
    // Load splan.html in iframe with proper base path handling
    const baseUrl = import.meta.env.BASE_URL;
    const iframe = document.createElement('iframe');
    iframe.src = new URL('splan.html', window.location.origin + baseUrl).href;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.display = 'block';
    this.iframeContainer.appendChild(iframe);
  }

  private setupInfo(): void {
    const infoText = `
      <p><strong>Creation & Capture</strong></p>
      <p>
        This model was created using the Scaniverse mobile application in splat mode to capture detailed 3D geometry. 
      </p>

      <p><strong>Enhancement & Export</strong></p>
      <p>
        After capturing, the model was enhanced with softer rendering and then exported as a .ply (Point Cloud) file. 
        This intermediate format preserves the raw point cloud data for further processing.
      </p>

      <p><strong>SuperSplat Editor Processing</strong></p>
      <p>
        The model was imported into the SuperSplat Editor (https://superspl.at/editor) for advanced optimization. 
        Using sphere and box selection tools, unnecessary geometric details were cleaned to improve visual quality 
        and reduce file size.
      </p>

      <p><strong>Animation & Keyframes</strong></p>
      <p>
        Strategic keypoints were added to the model to create dynamic motion videos and interactive presentations of the 3D model.
      </p>

      <p><strong>Web Export</strong></p>
      <p>
        Finally, the model was exported as an HTML file, optimized for easy deployment and viewing across 
        web platforms without requiring additional plugins or 3D software installations.
      </p>
    `;
    this.infoContainer.innerHTML = infoText;
  }

  private handleWindowResize(): void {
  }
}