import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const runtime = 'nodejs';

export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

export default async function Icon() {
    // Read the official aipp-logo.png from the public directory
    const logoPath = join(process.cwd(), 'public', 'aipp-logo.png');
    const logoData = await readFile(logoPath);
    const base64Logo = `data:image/png;base64,${logoData.toString('base64')}`;

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'transparent',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '100%',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'white', // Institutional white background for the circle
                    }}
                >
                    <img
                        src={base64Logo}
                        alt="AIPP Logo"
                        width="100%"
                        height="100%"
                        style={{
                            objectFit: 'contain',
                            padding: '2px', // Slight padding for visual balance
                        }}
                    />
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
