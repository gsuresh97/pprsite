

int interpolate_Component_Blue(int t);
int interpolate_Component_Green1(int t);
int interpolate_Component_Green2(int t);
int interpolate_Component_Red(int t);
void Component_rgb_driver(int red, int green, int blue);

int interpolate_Component_Blue(int t)
{
    if (t < 511 || t > 1023) return 0;
    return ((t - 511) * 255) / (1023 - 511) + ((1023 - t) * 0) / (1023 - 511);
}

int interpolate_Component_Green1(int t)
{
    if (t < 0 || t > 511) return 0;
    return ((t - 0) * 255) / (511 - 0) + ((511 - t) * 0) / (511 - 0);
}

int interpolate_Component_Green2(int t)
{
    if (t < 511 || t > 1023) return 0;
    return ((t - 511) * 0) / (1023 - 511) + ((1023 - t) * 255) / (1023 - 511);
}

int interpolate_Component_Red(int t)
{
    if (t < 0 || t > 511) return 0;
    return ((t - 0) * 0) / (511 - 0) + ((511 - t) * 255) / (511 - 0);
}

void Component_rgb_driver(int red, int green, int blue)
{
    analogWrite(3, red);
    analogWrite(5, green);
    analogWrite(6, blue);
}

void setup()
{
    pinMode(3, OUTPUT);
    pinMode(5, OUTPUT);
    pinMode(6, OUTPUT);
}

void loop()
{
   Component_rgb_driver(interpolate_Component_Red(analogRead(14)), interpolate_Component_Green1(analogRead(14)) + interpolate_Component_Green2(analogRead(14)), interpolate_Component_Blue(analogRead(14)));

}
